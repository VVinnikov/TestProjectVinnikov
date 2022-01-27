function TestCalculatorNotepad(number1, number2)
{
  var varProduct, varLoop, varDigit, varNumber1, varCSS, varUpperButtonHeight, varMainButtonHeight, varAmountFieldHeight, varCalcHeight, varCalcWidth, varButtonWidth, varNumber2;
  varProduct = "";
  varLoop = 0;
  varDigit = "";
  varNumber1 = "";
  varCSS = "";
  varUpperButtonHeight = 0;
  varMainButtonHeight = 0;
  varAmountFieldHeight = 0;
  varCalcHeight = 0;
  varCalcWidth = 0;
  varButtonWidth = 0;
  varNumber2 = "";
  //Runs the "CalculatorUWP" tested application.
  TestedApps.CalculatorUWP.Run();
  //Runs the "notepad" tested application.
  TestedApps.notepad.Run(1, true);
  //Maximizes the 'wndApplicationFrameWindow' window.
  Aliases.ApplicationFrameHost.wndApplicationFrameWindow.Maximize();
  //AssignCSS text to the variable
  varCSS = Aliases.EditLlise_CalculatorUWP.BrowserWindow.Window("Internet Explorer_Server", "", 1).Page("ms-appx://21442editllise.calculatoruwp/index.html").contentDocument.styleSheets.item(1).cssText;
  //Assign calc height to the variable
  varCalcHeight = Aliases.EditLlise_CalculatorUWP.BrowserWindow.Window("Internet Explorer_Server", "", 1).Page("ms-appx://21442editllise.calculatoruwp/index.html").contentDocument.body.clientHeight;
  //Posts an information message to the test log.
  Log.Message("Calc height = " + varCalcHeight, "");
  //Assign calc width value to the variable
  varCalcWidth = Aliases.EditLlise_CalculatorUWP.BrowserWindow.Window("Internet Explorer_Server", "", 1).Page("ms-appx://21442editllise.calculatoruwp/index.html").contentDocument.body.clientWidth;
  //Posts an information message to the test log.
  Log.Message("Calc width = " + varCalcWidth, "");
  //Assign a calc upper part height to the variable
  varAmountFieldHeight = Math.floor(Aliases.EditLlise_CalculatorUWP.BrowserWindow.Window("Internet Explorer_Server", "", 1).Page("ms-appx://21442editllise.calculatoruwp/index.html").contentDocument.styleSheets.item(1).rules.item(17).style.height.slice(0, -1) * 0.01 * varCalcHeight);
  //Posts an information message to the test log.
  Log.Message("Upper calc height = " + varAmountFieldHeight, "");
  //Assign an upper row button height to the variable
  varUpperButtonHeight = Math.floor(Aliases.EditLlise_CalculatorUWP.BrowserWindow.Window("Internet Explorer_Server", "", 1).Page("ms-appx://21442editllise.calculatoruwp/index.html").contentDocument.styleSheets.item(1).rules.item(18).style.height.slice(0, -1) * 0.01 * varCalcHeight);
  //Posts an information message to the test log.
  Log.Message("Upper buttons height = " + varUpperButtonHeight, "");
  //Assign a main button height value to the variable
  varMainButtonHeight = Math.floor(varCalcHeight - varAmountFieldHeight - varUpperButtonHeight * 0.25);
  //Posts an information message to the test log.
  Log.Message(varMainButtonHeight, "");
  //Assign a calc button width value to the variable
  varButtonWidth = Math.floor(varCalcHeight * 0.25);
  //Posts an information message to the test log.
  Log.Message(varButtonWidth, "");
  //Assign the number1 value to the variable
  varNumber1 = number1;
  //Posts an information message to the test log.
  Log.Message(varNumber1, "");
  varNumber2 = number2;
  //Posts an information message to the test log.
  Log.Message(varNumber2, "");
  varProduct = varNumber1 * varNumber2;
  //Delays the test execution for the specified time period.
  Delay(100);
  //Cycle through all digits
  for(varLoop = 0; varLoop <= varNumber1.length - 1; varLoop = varLoop + 1)
  {
    //Posts an information message to the test log.
    Log.Message(varLoop, "");
    varDigit = varNumber1.charAt(varLoop);
    //Posts an information message to the test log.
    Log.Message(varDigit, "");
    //Simulates a user action over the area that contains the recognized text.
    OCR.Recognize(Aliases.EditLlise_CalculatorUWP.BrowserWindow).BlockByText(varDigit, spBottomMost).Click();
    //Delays the test execution for the specified time period.
    Delay(100, varDigit);
  }
  //Simulates a user action over the area that contains the recognized text.
  OCR.Recognize(Aliases.EditLlise_CalculatorUWP.BrowserWindow).BlockByText("X", spBottomMost).Click();
  for(varLoop = 0; varLoop <= varNumber2.length - 1; varLoop = varLoop + 1)
  {
    varDigit = varNumber2.charAt(varLoop);
    //Simulates a user action over the area that contains the recognized text.
    OCR.Recognize(Aliases.EditLlise_CalculatorUWP.BrowserWindow).BlockByText(varDigit, spBottomMost).Click();
  }
  //Simulates a user action over the area that contains the recognized text.
  OCR.Recognize(Aliases.EditLlise_CalculatorUWP.BrowserWindow).BlockByText("=", spBottomMost).Click();
  //Checks whether the property value matches the specified condition. 
  aqObject.CompareProperty(Aliases.EditLlise_CalculatorUWP.BrowserWindow.Window("Internet Explorer_Server", "", 1).Page("ms-appx://21442editllise.calculatoruwp/index.html").contentDocument.getElementById("resultBlock").textContent, 0, varProduct, false, 3);
  //Simulates a single click with the left mouse button on the UI element specified by this image within the search area.
  //ImageRepository.ImageSet1.ButtonEquals.Click(-1, -1, skNoShift, Aliases.EditLlise_CalculatorUWP.BrowserWindow);
  //Simulates a single click with the left mouse button on the UI element specified by this image within the search area.
  ImageRepository.ImageSet1.ButtonCopyClipboard.Click(-1, -1, skNoShift, Aliases.EditLlise_CalculatorUWP.BrowserWindow);
  //Restores the 'wndApplicationFrameWindow' window.
  Aliases.ApplicationFrameHost.wndApplicationFrameWindow.Restore();
  //Maximizes the 'wndNotepad' window.
  Aliases.notepad.wndNotepad.Maximize();
  //Enters '^v' in the 'Edit' object.
  Aliases.notepad.wndNotepad.Edit.Keys("^v");
  //Restores the 'wndNotepad' window.
  Aliases.notepad.wndNotepad.Restore();
  //Enters '^s' in the 'Edit' object.
  Aliases.notepad.wndNotepad.Edit.Keys("^s");
  //Enters the text Date.now() in the 'ComboBox' text editor.
  Aliases.notepad.dlg_.DUIViewWndClassName.Item.FloatNotifySink.ComboBox.SetText(Date.now());
  //Clicks the 'btn_' button.
  Aliases.notepad.dlg_.btn_.ClickButton();
  //Closes the 'wndNotepad' window.
  Aliases.notepad.wndNotepad.Close();
  //Closes the 'wndApplicationFrameWindow' window.
  Aliases.ApplicationFrameHost.wndApplicationFrameWindow.Close();
}