export const simpleText = {
  containsHTML: false,
  payload: [
    {
      text:
        "HD entertainment at the price of SD. Enjoy 265+ chnls and 33 HD chnls. Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months. Recharge Now! TnC"
    },
    {
      lang: "hindi",
      text: "9999122730 par recharge kar dijiye"
    }
  ]
};

export const NLPSnapshotText = {
  NLPSnapshot: {
    entitySnapshot: [
      {
        score: 0.971124,
        endIndex: 9,
        startIndex: 0,
        type: "userPhoneNumber",
        entity: "9999122730"
      }
    ],
    intentSnapshot: {
      score: 0.8424482,
      name: "recharge"
    },
    name: "rasa"
  },
  containsHTML: false,
  payload: [
    {
      text: "9999122730 par recharge kar dijiye"
    },
    {
      lang: "hindi",
      text: "This is the translated message of above message."
    }
  ]
};

export const htmlText = {
  containsHTML: true,
  payload: [
    {
      text: `
      <div class="ori-full-width" style="width:200px">
        <p style="font-size:13px;"><b>{planName}</b></p>
        <div class="progress">
          <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:{percentLeft}">
          </div>
          <div class="progress" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:{percentUsed}">
            <p style="text-align:center;font-size:1vw;margin-top: 0.2vh;color: grey;font-weight:600">{usedData} used</p>
          </div>
        </div>
        <p style="font-size:13px;text-align: center">Total Data : {totalData}</p>
        <p style="font-size:13px">Used Data=>{usedData},&nbsp;&nbsp;Total Data=>{totalData},&nbsp;&nbsp;&nbsp;&nbsp;Left Data=>{leftData}</p>
    </div>`
    },
    {
      lang: "hindi",
      text: "9999122730 par recharge kar dijiye"
    }
  ]
};
