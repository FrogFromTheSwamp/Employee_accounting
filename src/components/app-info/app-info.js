import './app-info.css'

const AppInfo = (props) => {
    const { emploees, increaseEmploees} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {emploees}</h2>
            <h2>Премию получат: {increaseEmploees}</h2>
        </div>
    )
}

export default AppInfo;