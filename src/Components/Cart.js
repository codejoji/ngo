import React, { useState, useEffect } from "react";
import Header from "./ReusableComponents/Header";
import Footer from "./ReusableComponents/Footer";
import Grid from "@mui/material/Grid";
import jharkhand from "../assets/images/jharkhand.jpeg";
import cart from "../assets/images/icons8-cart-50.png";
import TextField from "@mui/material/TextField";
import lantern from "../assets/images/dlantern.jpeg";
import pos from "../assets/images/posion.jpeg";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Cart = () => {
  const navigate = useNavigate();

  const [entry, setEntry] = useState("");
  const [plant, setplant] = useState("");
  const [loc, setloc] = useState("");
  const [sum, setsum] = useState(0);
  const [goodybag, setgoodybag] = useState(0);
  const [reply, setreply] = useState();
  const [data2, setdata2] = useState();
  const [treecount, settreecount] = useState();
  var nm = JSON.parse(sessionStorage.getItem("userid"));
  var amt = 0;
  console.log("nm", nm);
  console.log("treecount",treecount)


  var base64 = require("base-64"); // install it before use from npm i base-64

  const uname = "rzp_test_jX05P2Idt8g68k";
  const pword = "clmYvEvwezKrBWwlam0o6DOZ";

  const handlepayment = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_jX05P2Idt8g68k",
      key_secret: "clmYvEvwezKrBWwlam0o6DOZ", // Enter the Key ID generated from the Dashboard
      amount: summ * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "SankalpTaru", //your business name
      description: "Test Transaction",
      // "image": "https://example.com/your_logo",
      // "order_id": `order_${Math.random()}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        console.log("response", response);
        alert(response.razorpay_payment_id);

        let form = {
          payment_id: response.razorpay_payment_id,
          user_id: nm?.user?.id,
          amount: summ,
        };

        const requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        };
        fetch("http://127.0.0.1:8000/api/paymentDetails", requestOptions)
          .then((response) => response.json())
          .then((data) => handleDeleteall());
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    // handleProceed();
  };

  // // rzp1.on('payment.failed', function (response){
  // //         alert(response.error.code);
  // //         alert(response.error.description);
  // //         alert(response.error.source);
  // //         alert(response.error.step);
  // //         alert(response.error.reason);
  // //         alert(response.error.metadata.order_id);
  // //         alert(response.error.metadata.payment_id);
  // // });
  // // document.getElementById('rzp-button1').onclick = function(e){
  // //     rzp1.open();
  // //     e.preventDefault();
  // // }

  // // const loadScript=(src)=>{
  // //   return new Promise((resolve)=>{
  // //     const script= document.createElement('script')
  // //     script.src=src
  // //     script.onload=()=>{
  // //       resolve(true)
  // //     }
  // //     script.onerror=()=>{
  // //       resolve(false)
  // //     }
  // //     document.body.appendChild(script)
  // //   })
  // // }
  // // const displayRazorpay=async(amount)=>{
  // //   const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  // //   if(!res){
  // //     alert('You"re offline')

  // //   }
  // // }
  // function handleProceed (){

  //   var instance = new window.Razorpay({ key_id: uname, key_secret: pword })

  //   let form={
  //     amount: amount,
  //     currency:"INR",
  //     receipt:"qwsaq1",
  //     partial_payment: true,
  //     first_payment_min_amount: 230
  //   }

  //   instance.orders.create(form)

  //   console.log("sadhvd",instance);

  // // const requestOptions = {
  // //     method: 'POST',
  // //     headers: { 'Accept': 'application/json' ,
  // //     'Content-Type': 'application/json',
  // //     'Authorization': "Basic " + base64.encode( uname+ ":" + pword)
  // //   },
  // //     body: JSON.stringify( form )
  // // };

  // // fetch('https://api.razorpay.com/v1/orders', requestOptions)
  // // .then(response => response.json())
  // // .then(data => console.log("dataa",data));

  // }

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };
    fetch(`http://127.0.0.1:8000/api/displaycart/${nm.user.id}`)
      .then((res) => res.json())
      .then((json) => setEntry(json));

    fetch("http://127.0.0.1:8000/api/plantdeetdisplay")
      .then((res) => res.json())
      .then((json) => setplant(json));

    fetch("http://127.0.0.1:8000/api/displaylocwithplant")
      .then((res) => res.json())
      .then((json) => setloc(json));
  }, []);

  console.log("mm", entry);
  console.log("mm2", plant);
  console.log("mm3", loc);

  let newloc = [];
  if (loc?.result?.length > 0) {
    loc?.result?.map((list) => {
      if (list.plant_detail) {
        newloc.push({
          ...list,
        });
      }
    });
  }
  console.log("newloc", newloc);
  const plantids = [];
  var costs = [];
  if (newloc?.length > 0) {
    {
      newloc?.map((list) =>{
        costs.push(list?.cost * list?.plant_detail?.nooftrees)
      }
      );
    }
    {
      newloc?.map((list) => plantids.push(list?.plant_detail?.id));
    }
  }
  console.log("plantids", plantids);
  console.log("amount", costs);

  var summ = costs.reduce(add, 0); // with initial value to avoid when the array is empty

  function add(accumulator, a) {
    return accumulator + a;
  }
  console.log("total", summ);

  function handleDelete(deetid) {
    console.log("deetid", deetid);
    const requestOptions = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(`http://127.0.0.1:8000/api/cart/delete/${deetid}`, requestOptions)
      .then((response) => response.json())
      .then((data) => handleDelete2(deetid));
  }

  function handleDelete2(deetid) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(
      `http://127.0.0.1:8000/api/plantdetail/delete/${deetid}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => renderagain());
  }

  function renderagain() {
    const requestOptions2 = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };
    fetch("http://127.0.0.1:8000/api/displaylocwithplant")
      .then((res) => res.json())
      .then((json) => setloc(json));
  }
  console.log("newloc", newloc);

  // if (newloc?.length>0) {
  //   {
  //     newloc?.map((list) =>
  //       settreecount(list.plant_detail.nooftrees)
  //     );
  //   }
  // }

  function handleDeleteall() {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(`http://127.0.0.1:8000/api/cart/delete`, requestOptions)
      .then((response) => response.json())
      .then((data) => handleDeleteall2(plantids));
    // handleDeleteall2(data?.result)
  }

  function handleDeleteall2(plantids) {
    console.log("ids", plantids);
    plantids.forEach((element, index) => {
      const requestOptions = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      fetch(
        `http://127.0.0.1:8000/api/plantdetail/delete/${element}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => renderagain());
    });
  }

  const handleAdd=(loc_id,tree)=>{
    let form = {
      nooftrees: tree+1
    };
    console.log("fform",form)
    // settreecount(tree+1)
    // render(loc_id)
    console.log("formtree",form)
    const requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    if(loc_id){
      fetch(`http://127.0.0.1:8000/api/plantdeet/update/${loc_id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => renderagain())
    }
      
  }
  const handleReduce=(loc_id,tree)=>{
    let form = {
      nooftrees: tree-1
    };
    console.log("formtree",form)
    const requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    if(loc_id){
      fetch(`http://127.0.0.1:8000/api/plantdeet/update/${loc_id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => renderagain())
    }
  }

  


  return (
    <div>
      <Header />

      <Grid
        container
        spacing={3}
        style={{ padding: "30px", display: "flex", justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          lg={7}
          sm={12}
          md={12}
          className="cartgrid"
          style={{ margin: "10px" }}
        >
          {newloc?.map((list) => (
            <Grid
              container
              spacing={2}
              className="choice1"
              style={{ backgroundColor: "white" }}
            >
              {list.plant_detail.nooftrees < 10 ? (
                <Grid item xs={12}>
                  <div
                    className="choice1"
                    style={{ justifyContent: "left", backgroundColor: "white" }}
                  >
                    <img src={cart} style={{ padding: "20px" }}></img>
                    <h5 style={{ color: "red" }}>
                      Just few trees more and you will be eligible for a goody
                      bag.
                    </h5>
                  </div>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <div
                    className="choice1"
                    style={{ justifyContent: "left", backgroundColor: "white" }}
                  >
                    <img src={cart} style={{ padding: "20px" }}></img>
                    <h5 style={{ color: "green" }}>
                      You are eligible for a goody bag.
                    </h5>
                  </div>
                </Grid>
              )}

              {/* <Grid item xs={3} className='choice1'style={{padding:"20px"}}>
                                <img src={list.imgpath} style={{height:"100px",width:"100px"}}></img>
                            </Grid> */}

              <Grid
                item
                xs={12}
                sm={12}
                lg={8}
                md={8}
                style={{ padding: "20px" }}
              >
                <h2 id="h2cart">{list?.title}</h2>
                <p id="pmoneycart">
                  <b>Rs {list.cost}.00</b>
                </p>
                <p>
                  <b>No of trees: {list.plant_detail.nooftrees}</b>
                </p>
                <button onClick={()=>{handleAdd(list.plant_detail.id,list.plant_detail.nooftrees)}}className="loginbutton">Add</button>
                <button onClick={()=>{handleReduce(list.plant_detail.id,list.plant_detail.nooftrees)}}className="loginbutton">Reduce</button>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                md={3}
                style={{ padding: "20px" }}
              >
                <p>Total: Rs {list.cost * list.plant_detail.nooftrees}.00</p>
                <button
                  onClick={() => handleDelete(list?.plant_detail?.id)}
                  className="loginbutton"
                >
                  Delete
                </button>
              </Grid>
            </Grid>
          ))}
          <hr></hr>

          {newloc?.length > 0 ? (
            <Grid
              container
              spacing={2}
              className="choice1"
              style={{ backgroundColor: "white" }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                lg={5}
                md={5}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "60px",
                }}
              >
                <h4>Total: &nbsp;&nbsp;</h4>
                <p>Rs {summ}</p>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                lg={4}
                md={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  id="rzp-button1"
                  onClick={handlepayment}
                  className="cartbuttons"
                >
                  Proceed to Checkout
                </button>
              </Grid>

              <Grid item xs={12} sm={12} lg={3} md={3}>
                <button
                  onClick={() => navigate("/PlantNow")}
                  className="cartbuttons"
                >
                  Add more trees
                </button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </Grid>

        {newloc?.length > 0 ? (
          <Grid
            item
            xs={12}
            lg={4}
            sm={12}
            md={12}
            className="cartgrid"
            style={{
              padding: "10px",
              margin: "10px",
              backgroundColor: "white",
            }}
          >
            <h2>Add-ons to support farmers</h2>

            <div style={{ textAlign: "center" }}>
              <h3>D-lantern</h3>
              <img src={lantern} className="cartimg"></img>
              <p>
                Support our farmer beneficiaries to work more efficiently and
                improve their quality of life by donating solar lanterns to
                them.
              </p>
            </div>
            <Grid container spacing={0} className="choice1">
              <Grid item xs={6} className="choice1">
                <p>Price: Rs 949.00</p>
              </Grid>
              <Grid item xs={6} className="choice1">
                <buttom
                  onClick={() => navigate("/PlantNow/Dlantern")}
                  className="cartbuttons"
                >
                  Add to cart
                </buttom>
              </Grid>
            </Grid>
            <hr />

            <div style={{ textAlign: "center" }}>
              <h3>Poshan Kit</h3>
              <img src={pos} style={{ width: "100%" }}></img>
              <p>
                Donate a Poshan kit to our women farmers to fight against
                anemia. Nutritious Poshan kit is rich in Iron, Protein, Omega 3,
                6 fatty acids and fiber sourced from nature and prepared without
                harmful preservatives.{" "}
              </p>
            </div>
            <Grid container spacing={0} className="choice1">
              <Grid item xs={6} className="choice1">
                <p>Price: Rs 399.00</p>
              </Grid>
              <Grid item xs={6} className="choice1">
                <buttom
                  onClick={() => navigate("/PlantNow/Poshionkit")}
                  className="cartbuttons"
                >
                  Add to cart
                </buttom>
              </Grid>
            </Grid>
            <hr />
          </Grid>
        ) : (
          <Grid container spaing={2} className="choice1">
            <Grid
              item
              xs={12}
              style={{ textAlign: "center", padding: "200px" }}
            >
              <h2 style={{ color: "green", margin: "2px" }}>
                There are no items in the cart
              </h2>
              <p style={{ color: "grey", margin: "2px" }}>
                Add trees to the environment
              </p>
              <button
                onClick={() => navigate("/PlantNow")}
                className="loginbutton"
              >
                Add items
              </button>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Footer />
    </div>
  );
};

export default Cart;
