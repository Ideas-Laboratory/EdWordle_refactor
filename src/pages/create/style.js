import styled from 'styled-components';
export const ToolsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:20%;
    height:calc(100vh - 57px) ;
    float:left;
`
export const Tools = styled.div`
    display:flex;
    margin:10px;
    height:70%;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    /* background:pink; */
    box-sizing: border-box;
    /* box-shadow:0px 0px 10px grey; */
    margin:10px;
    padding:20px 0px 20px 0px;
    hr{
        width: 80%;
		margin: 0 auto;
		border: 0;
		height: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
`
export const Item = styled.div`
    display:flex;
    font-family:"RedHat";
`
export const BoardWrapper = styled.div`
    display:flex;
    /* float:left; */
    /* background:red; */
    /* justify-content:center; */
    align-items:center;
    width:80%;
    height:calc(100vh - 57px) ;
    canvas{
        display:flex;
        width:90%;
        left:10%;
        height:80%;
        border-radius:31px;
        box-shadow:0px 0px 30px rgba(0, 0, 0, 0.15);
    }
`
export const CreateStyle = styled.div`
    .toolsContainer{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:20%;
        height:calc(100vh - 57px) ;
        float:left;
    }
    .canvasContainer{
        display:flex;
        /* float:left; */
        /* background:red; */
        /* justify-content:center; */
        align-items:center;
        width:80%;
        height:calc(100vh - 57px) ;
    }
    .drawpad{
        display:flex;
        /* background:green; */
        width:90%;
        left:10%;
        height:80%;
        border-radius:31px;
        box-shadow:0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    .tools{
        display:flex;
        margin:10px;
        height:70%;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        /* background:pink; */
        box-sizing: border-box;
        /* box-shadow:0px 0px 10px grey; */
        margin:10px;
        padding:20px 0px 20px 0px;
    }
    .item{
        display:flex;
        font-family:"RedHatBold";
    }
    hr.sp{
        width: 80%;
		margin: 0 auto;
		border: 0;
		height: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
`