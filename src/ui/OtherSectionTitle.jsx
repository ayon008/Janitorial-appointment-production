const OtherSectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <h5 className="text-lg poppins font-bold text-services text-center">{heading}</h5>
            <h1 className="poppins text-5xl font-medium text-center">{subHeading}</h1>
        </>
    );
};

export default OtherSectionTitle;