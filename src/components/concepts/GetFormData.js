function GetFormData() {
    return (
        <div>
            <form>
                <label></label>
                <input type="text" name="firstName" />
                <label></label>
                <input type="text" name="lastName" />
                <label></label>
                <input type="text" name="FatherName" />
                <label></label>
                <input type="text" name="MatherName" />
                <label></label>
                <input type="text" name="brotherName" />
                <label></label>
                <select>
                    <option>Select State</option>
                    <option>AP</option>
                    <option>TS</option>
                    <option>TN</option>
                    <option>KL</option>
                </select>
            </form>
        </div>
    );
}

export default GetFormData;