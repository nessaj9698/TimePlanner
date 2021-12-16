import Header from './Header';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';

const Container = () => {
    return (
        <div className='container'>
        <Header/>
        <Content/>
        <Sidebar/>
        </div>
    )
}


export default Container;