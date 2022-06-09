const Caritem = (props) => {
    //Vanilla JS 
    console.log(props);
    console.log(props.car);

    return (
        <div>
            <h2>{props.car}</h2>
            <h2>{props.carModel}</h2>
            <h2>{props.carYear}</h2>
        </div>
    );
}

export default Caritem;