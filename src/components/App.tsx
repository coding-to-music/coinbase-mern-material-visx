import React from "react";
import { connect } from "react-redux";

import { StoreState } from "../state/reducers";
import { fetchCryptoInfo } from "../state/action-creators";
import { CryptoInfo } from "../state/actions";
import Navbar from "./Navbar";
import CryptoTable from "./Table";
import TableTabs from "./TableTabs";

interface AppProps {
  cryptoInfo: CryptoInfo[];
  fetchCryptoInfo: Function;
}

const _App: React.FC<AppProps> = ({ fetchCryptoInfo, cryptoInfo }) => {
  const onButtonClick = (): void => {
    fetchCryptoInfo();
  };

  const renderList = (): JSX.Element[] => {
    return cryptoInfo.map((cryptoInfo: CryptoInfo) => {
      return <div key={cryptoInfo.id}>{cryptoInfo.name}</div>;
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      <Navbar />
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({
  cryptoInfo,
}: StoreState): { cryptoInfo: CryptoInfo[] } => {
  return { cryptoInfo };
};

export const App = connect(mapStateToProps, { fetchCryptoInfo })(_App);
