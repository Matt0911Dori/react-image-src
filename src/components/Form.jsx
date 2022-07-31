const Form = ({ setWord, getPhotoData }) => { 
    return (
        <form>
            <input
                type="text"
                name="keyword"
                placeholder="例）日本食, Cat"
                onChange={e => setWord(e.target.value)}
            />
            <button type="submit" onClick={getPhotoData}>Search</button>
        </form>
    );
}
 
export default Form;