
import { store } from "./redux/store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <div className="bg-red-900 p-4">
      <Provider store={store}>Good</Provider>
    </div>
  );
}
