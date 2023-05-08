import { Navigate, Route, Routes } from "react-router-dom";
import { StoreSingle } from "../StoreSingle/StoreSingle";
import { StoreList } from "../StoreList/StoreList";
export const StoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="books" />} />
      <Route path="books" element={<StoreList />}></Route>
      <Route path="books/:id" element={<StoreSingle />} />
    </Routes>
  );
};
