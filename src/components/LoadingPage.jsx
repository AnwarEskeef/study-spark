export default function LoadingPage()
{
    let rootStyle = {
        height: '800px',
        backgroundColor:'#111111'
    }
    let loadingText = {
        fontSize: '50px',
        textAlign: 'center',
        paddingTop: '12%',
        color:'white',
    }
 
    return <>
        <div style={rootStyle}>
            
            <p style ={loadingText}>
                Loading...
                <div className="spinner" ></div> 
            </p>
     </div>
    </>
}
