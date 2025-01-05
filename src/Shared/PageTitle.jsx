const PageTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <h1 className="inter text-6xl font-bold">{heading}</h1>
            <p className="text-xl font-normal mt-2">{subHeading}</p>
        </div>
    );
};

export default PageTitle;