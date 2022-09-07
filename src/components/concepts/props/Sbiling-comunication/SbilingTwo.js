function SbilingTwo({userValue}) {
    return (
        <div className="displayFlex_column gap_10">
            <u>
                Reciving Data from Sbiling
            </u>
            <div className="displayFlex_center">
                Data is: 
                
                <h5>{userValue}</h5>
                </div>
        </div>
    );
}

export default SbilingTwo;