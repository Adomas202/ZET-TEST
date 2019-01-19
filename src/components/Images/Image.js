import React from 'react';
import './Images.css';

const Image = () => {
    const styles = {
        height: '50px',
        width: '100%'
    }

    return (
        <div className="container">
        <div className="row">
            <div className="form-group col-lg-5">
                <input style={styles} className="form-input"></input>
            </div>
            <div className="col-lg-7 d-flex justify-content-end align-self-end">
                Kaina cia nurodyta tikrai nera PVM
            </div>
        </div>
            <div className="row">
            <div class="card col-sm-3">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-sm-3">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-sm-3">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-sm-3">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;