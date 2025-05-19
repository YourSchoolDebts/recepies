import { SimpleSlider } from "../components/carousel";


function Contact() {
    return(
        <>  
            <h3 className="center">The project was done by two students. They tried. (Probably) Enjoy your meal!</h3>
            <h4 className="center">Developers:</h4>
            <div className="names">
                <a href="https://github.com/YourSchoolDebts"><h4>Екатерина Манец</h4></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><h4>Алексей Овчинников</h4></a>
            </div>
            <h5 className="center">Honorable mention:</h5>
            <SimpleSlider />
        </>
        
    );
}
export { Contact };