export const simpleForm = {
  type: "form",
  sender: "chatbot",
  inputLock: false,
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      title: "form title",
      selectedValue: { rate: 4, rangeDates: [] },
      formData: [
        {
          type: "input",
          title: "Email id",
          displayLabel: "Email",
          props: {
            type: "email",
            placeholder: "Enter your EmailID",
            name: "email",
            required: true
          }
        },
        {
          type: "datePicker",
          title: "select your departure date",
          disabledTimestamp: "1629455793767",
          displayLabel: "Departure date",
          props: {
            placeholder: "departure date",
            name: "departDate",
            format: "DD-MM-YYYY",
            required: false
          }
        },
        {
          type: "dateRangePicker",
          title: "Select Start and End date",
          disabledDateRange: [],
          displayLabel: "Vacation Duration",
          props: {
            placeholder: ["Start Date", "End Date"],
            format: "YYYY-MM-DD HH-mm A",
            name: "rangeDates",
            disabled: [true, false],
            showTime: true,
            required: false
          }
        },
        {
          type: "radioGroup",
          title: "Passanger1",
          displayLabel: "Passanger 1",
          props: {
            name: "bag1",
            required: true,
            size: "small",
            buttonStyle: "solid",
            optionType: "button",
            options: [
              { label: "80kg", value: "80kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" }
            ]
          }
        },
        {
          type: "radioGroup",
          title: "Passanger2",
          vertical: true,
          displayLabel: "Passanger 2",
          props: {
            name: "bag2",
            required: true,
            options: [
              { label: "10kg", value: "10kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" },
              { label: "20kg", value: "20kgId" },
              { label: "25kg", value: "25kgId" }
            ]
          }
        },
        {
          type: "rating",
          title: "rate this feature",
          displayLabel: "rating",
          props: {
            name: "rate",
            required: true
          }
        }
      ]
    },
    {
      lang: "hindi",
      title: "form title",
      selectedValue: { rate: 4 },
      formData: [
        {
          type: "datePicker",
          title: "select your departure date",
          disabledTimestamp: "1629455793767",
          displayLabel: "Departure date",
          props: {
            placeholder: "departure date",
            name: "departDate",
            format: "DD-MM-YYYY",
            required: false
          }
        },
        {
          type: "radioGroup",
          title: "Passanger1",
          displayLabel: "Passanger 1",
          props: {
            name: "bag1",
            required: true,
            size: "small",
            buttonStyle: "solid",
            optionType: "button",
            options: [
              { label: "80kg", value: "80kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" }
            ]
          }
        },
        {
          type: "radioGroup",
          title: "Passanger2",
          vertical: true,
          displayLabel: "Passanger 2",
          props: {
            name: "bag2",
            required: false,
            options: [
              { label: "10kg", value: "10kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" },
              { label: "20kg", value: "20kgId" },
              { label: "25kg", value: "25kgId" }
            ]
          }
        },
        {
          type: "select",
          title: "Pagganger3",
          displayLabel: "Passanger 3",
          props: {
            name: "bag3",
            placeholder: "Select Baggage",
            required: false,
            options: [
              { label: "10kg", value: "10kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" },
              { label: "20kg", value: "20kgId" },
              { label: "25kg", value: "25kgId" }
            ]
          }
        },
        {
          type: "rating",
          title: "rate this feature",
          displayLabel: "rating",
          props: {
            name: "rate",
            required: false
          }
        }
      ]
    }
  ],
  timestamp: new Date()
}
