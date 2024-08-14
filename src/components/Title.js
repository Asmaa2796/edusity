const Title = ({mainTitle,subTitle}) => {
    return (
        <div className="title text-center pt-5 py-3">
            <div className="container">
            <p>{subTitle}</p>
            <h2>{mainTitle}</h2>
            <span></span>
            </div>
        </div>
    );
}

export default Title;
