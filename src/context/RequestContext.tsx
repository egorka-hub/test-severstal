import React, {
  createContext,
  useContext,
  useState
} from 'react';

interface ProviderProps {
  children: React.ReactElement;
  propValue: RequestData[];
}

interface RequestData {
  time: Date;
  url: string;
}

export const RequestContext = createContext<{
  data: RequestData[];
  setData: React.Dispatch<React.SetStateAction<RequestData[]>>;
}>({
  data: [],
  setData: () => {},
});

export function useRequest() {
  const ctx = useContext(RequestContext);
  return ctx;
}

export const RequestProvider: React.FC<ProviderProps> = ({ children, propValue }) => {
  const [data, setData] = useState<RequestData[]>(propValue);

  return (
    <RequestContext.Provider value={{ data, setData }}>
      {children}
    </RequestContext.Provider>
  );
};
