// Import Modules
import { render } from "react-dom";
import { PureComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import HomeText from "component/HomeText";
import Menu from "component/Menu";
import Calculator from "component/Calculator";
import DrumMachine from "component/DrumMachine";
import MarkdownPreviewer from "component/MarkdownPreviewer";
import PomodoroClock from "component/PomodoroClock";
import QuoteMachine from "component/QuoteMachine";

// Import Styles
import "style/main.scss";

class AppRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomeText />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/drum-machine" element={<DrumMachine />} />
          <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
          <Route path="/pomodoro-clock" element={<PomodoroClock />} />
          <Route path="/quote-machine" element={<QuoteMachine />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

render(<AppRouter />, document.getElementById("root"));
