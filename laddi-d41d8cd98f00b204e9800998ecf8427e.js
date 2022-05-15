function laddiPost() {
  if (!window.gotName) {
    function findLMSAPI(win) {
      if (win.hasOwnProperty("GetStudentID")) {
        return win;
      } else if (win.parent == win) {
        return null;
      } else {
        return findLMSAPI(win.parent);
      }
    }
    const lmsAPI = findLMSAPI(this);
    let name = lmsAPI.SCORM2004_GetStudentName();
    let nameArray = name.split(",");
    let firstName = nameArray[1];
    let lastName = nameArray[0];
    let fullName = firstName + " " + lastName;
    window.player.SetVar("nameLMS", fullName);
    window.gotName = true;
  }
  let date = new Date();
  let nameLMS = window.player.GetVar("nameLMS");
  let nameEntry = window.player.GetVar("Name");
  let progressOverall = window.player.GetVar("2_5_Progress_Overall");
  let progressFilling = window.player.GetVar("2_5_Progress_Filling");
  let labelling = window.player.GetVar("2_5_Progress_Labelling");
  let packing = window.player.GetVar("2_5_Progress_Packing");
  let palleting = window.player.GetVar("2_5_Progress_Palletising");
  let pasteurisation = window.player.GetVar("2_5_Progress_Pasteurisation");
  let npd = window.player.GetVar("2_5_Progress_NPD_And_Trial_Management");
  let consumerQuality = window.player.GetVar("2_5_Progress_Consumer_Quality");
  let inspection = window.player.GetVar("2_5_Progress_Inspection_and_Coding");
  let lineControl = window.player.GetVar("2_5_Progress_Line_Control");
  let materialSpecifications = window.player.GetVar(
    "2_5_Progress_Material_Specifications"
  );
  let defectAndSupplierManagement = window.player.GetVar(
    "2_5_Progress_Defect_And_Supplier_Management"
  );
  axios({
    method: "POST",
    url: "https://laddi.app/user",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    data: {
      clientId:
        "1c8dbddf9165922df29773c7b440a7e2322ca22d41cf3d53affdfc48a1e453f1",
      courseName: "Prospecting Management Gold",
      date: date,
      nameLMS: nameLMS,
      nameEntry: nameEntry,
      progressOverall: progressOverall,
      progressFilling: progressFilling,
      labelling: labelling,
      packing: packing,
      palleting: palleting,
      pasteurisation: pasteurisation,
      npd: npd,
      consumerQuality: consumerQuality,
      inspection: inspection,
      lineControl: lineControl,
      materialSpecifications,
      materialSpecifications,
      defectAndSupplierManagement: defectAndSupplierManagement,
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
