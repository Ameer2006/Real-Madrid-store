import React from 'react'

export default function PaymentCard() {
  return (
    <div class="container d-flex justify-content-center" style={{ marginTop: "6rem" }}>

      <div class="card " style={{ height: " 400px", width: "450px" }}>
        <div class="card-header p-0" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-light btn-block text-left p-3 rounded-0">
              <div class="d-flex align-items-center justify-content-between">
                <span>Credit card</span>
                <div class="icons">
                  <img src="https://i.imgur.com/2ISgYja.png" width={30} />
                  <img src="https://i.imgur.com/W1vtnOV.png" width={30} />
                  <img src="https://i.imgur.com/35tC99g.png" width={30} />
                  <img src="https://i.imgur.com/2ISgYja.png" width={30} />
                </div>
              </div>
            </button>
          </h2>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body payment-card-body">
            <span class="font-weight-normal card-text">Card Number</span>
            <div class="input mb-4">
              <i class="fa fa-credit-card" />
              <input type="text" class="form-control" placeholder="0000 0000 0000 0000" />
            </div>
            <div class="row mt-3 mb-3">
              <div class="col-md-6">
                <span class="font-weight-normal card-text">Expiry Date</span>
                <div class="input">
                  <i class="fa fa-calendar" />
                  <input type="text" class="form-control" placeholder="MM/YY" />
                </div>
              </div>
              <div class="col-md-6">
                <span class="font-weight-normal card-text">CVC/CVV</span>
                <div class="input">
                  <i class="fa fa-lock" />
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <button class="btn btn-primary ">Save Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
