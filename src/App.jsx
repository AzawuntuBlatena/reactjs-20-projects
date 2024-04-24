
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeList from './components/tree-list';
import menus from './components/tree-list/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modual-popup/modal-test';
import GitHubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-using-api';
import TicTacToe from './components/tic-tac-toe';
import UseFetchHookTest from './components/use-featch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';


function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* Load more products component */}
      {/* <LoadMoreData/> */}
      
      {/* <TreeList menus={menus}/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
       {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <GitHubProfileFinder/> */}
      {/* <SearchAutocomplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}

      {/* <UseFetchHookTest/> */}
      {/* <UseOnclickOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndBottom/> */}
      {/* <ScrollToSection/> */}

    </div>
  );
}

export default App;
