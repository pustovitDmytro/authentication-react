/**
 * Created by pusti on 27.08.2017.
 */
import validators from '../../Input/validators';

export const handleFile = (callback) => (event) => {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0], "UTF-8");
    reader.onload = (e) => sendFile(e.target.result,callback);
};

export const checkObj = (obj)=>{
    for (let name in obj){
        if (!validators[name].test(obj[name]))
            throw new SyntaxError(`Incorect data: ${obj[name]}`);
    }
};

export const sendFile = (content,callback) => {
    try {
        const array = parseFile(content);
        array.forEach(file=>checkObj(file));
        callback(array);
    }
    catch(err){
        console.log(err);
    }
};

export const parseFile = text => {
    let strFilms = text.split(/\n{2,}/);
    if (!strFilms[strFilms.length-1]) strFilms.pop();
    return strFilms.map(film => {
            const fields = film.split(/\n/);
            return fields.reduce((obj, field)=>{
                const arrField = field.split(/:/);
                obj[unificate[arrField[0]]]=arrField[1].trim();
                return obj;
            },{});
        }
    );
};

const unificate = {
    'Title':'title',
    'Release Year':'year',
    'Format':'format',
    'Stars':'stars'
};
