

function Contact() {
    return (
        <section id="contactform">
            <div className="container">
                <form>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault01">First name</label>
                            <input type="text" className="form-control" id="validationDefault01" required></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault02">Last name</label>
                            <input type="text" className="form-control" id="validationDefault02" required></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault03">E-mail</label>
                            <input type="text" className="form-control" id="validationDefault03" required></input>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit"><a href="mailto:aroseca15@gmail.com" id="submit">Contact Me</a></button>
                </form>
            </div>
        </section>


    )
}

export default Contact;