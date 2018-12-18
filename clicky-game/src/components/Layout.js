import React from "react";


const layout = () => (
  <div className="container">

    {/* <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Clicky Game</a>
      </nav>
    </div> */}


    {/* <div className="jumbotron centered">
      <h1>Clicky Game!</h1>
      <p>Click on an image to earn points, but dont click more than once!</p>
    </div> */}


    {/* row 1 */}
    <div className="row">
      <div className="card col-3">
        <img className="card-img-top" src="https://i.pinimg.com/474x/d6/e1/fc/d6e1fc931542798000125379982645f0.jpg" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="https://66.media.tumblr.com/7faa48e1ebf395fbea16a5a397910e6d/tumblr_oabp1karlS1tumicto1_250.png" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="https://66.media.tumblr.com/5ee559ff04a329937cca6399fc659256/tumblr_pbz6bgjg9H1tex57xo3_250.png" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="http://www.xfsource.net/wp-content/uploads/the-x-files/characters/the-syndicate-characters/Deep_Throat-250x250.jpg" alt="Card image cap" />
      </div>
    </div>

    {/* row 2 */}
    <div className="row">
      <div className="card col-3">
        <img className="card-img-top" src="https://66.media.tumblr.com/68123f0c672d4ea151aa8fab89fd939b/tumblr_p5e88oXUc51wyd738o6_250.jpg" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="https://pbs.twimg.com/profile_images/1064768562932445184/jh-ZOzmL.jpg" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="https://66.media.tumblr.com/b7dd26194769802006cdcff507964e76/tumblr_o328o90oUt1v24kv4o9_250.png" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="https://i.pinimg.com/originals/4d/fb/91/4dfb91d01351e067c3c89d5c3f26a889.jpg" alt="Card image cap" />
      </div>
    </div>

    {/* row 3 */}
    <div className="row">
      <div className="card col-3 ">
        <img className="card-img-top" src="https://66.media.tumblr.com/2591080642c193594868c8f7b6bd4ba7/tumblr_nq3ulvEVBp1u5nbkgo1_250.png" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-9EDMaDX6ORn9Uer8PO8lHYiNuuwDmWwdpHbYkF1hGwWTve3" alt="Card image cap" />
      </div>
      <div className="card col-3">
        <img className="card-img-top" src="https://pbs.twimg.com/media/DoWZd1OUgAEmFLb.jpg" alt="Card image cap" />
      </div>
    </div>

  </div>
);

export default layout;