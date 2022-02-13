import data from "../../userDatas";

function MainPage(){
    return(
             <p>{data.username+data.password}</p>
        );
}

export default MainPage;