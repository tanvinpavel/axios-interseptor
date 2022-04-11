// import useAccessToken from '../../hooks/useAccessToken';
import useAuth from '../../hooks/useAuth';
import useContextApi from '../../hooks/useContextApi';

const Home = () => {
    const {user} = useContextApi();
    const axiosPrivate = useAuth();
    console.log(user);

    const formHandler = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/delete/${id}`);

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    // const token = useAccessToken();   

    // const tokenHandler = async () => {
    //     const x = await token();
    //     console.log(x);
    // }
    return (
        <div className='App'>
            <div>
                <h1>this is home</h1>
                <br />

                <button onClick={()=>formHandler(1)}>Delete user 1</button>
                <button onClick={()=>formHandler(2)}>Delete user 2</button>
                {/* <button onClick={tokenHandler}>Refresh Token</button> */}
            </div>
        </div>
    );
};

export default Home;