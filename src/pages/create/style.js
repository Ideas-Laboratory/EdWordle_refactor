import styled from 'styled-components';
export const ToolsWapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:20%;
    height:calc(100vh - 57px) ;
    float:left;
`
export const Tools = styled.ul`
    display:flex;
    margin:10px;
    height:50vh;
    width:40%;
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
    &>li {
        display:flex;
        font-family:"RedHatBold";
        border: 0;
        width:70%;
        justify-content:center;
        align-items:center;
        height: 2vh;
        background:#FFFFFF;
        border-radius:22px;
        padding: 20px;
        /* text-overflow: hidden; */
        white-space:nowrap;
        &:hover{
            box-shadow:0px 0px 30px rgba(0, 0, 0, 0.1);
            padding: 22px 25px 22px 25px;
            cursor:pointer;
        }
        &:hover ul{
            background:pink;
            display:block;
        }
        transition: all .2s ease-out;
    }
`
export const EditPanel = styled.ul`
    position:absolute;
    display: none;
    background:rgba(0, 0, 0, 0.1);
    list-style-type:none;
    margin-left:17%;
    z-index:10;
    border-radius:10px;
    li {
        white-space:nowrap;
        background: #FFF;
        border:0;
        height: 3vh;
        border-radius:8px;
        margin:10px;
        padding: 10px;
        font-family:"RedHat";
        display: flex;
        justify-content:center;
        align-items:center;
    }
`
export const BoardWapper = styled.div`
    display:flex;
    /* float:left; */
    /* background:red; */
    /* justify-content:center; */
    align-items:center;
    width:80%;
    height:calc(100vh - 57px) ;
    .play-ground {
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