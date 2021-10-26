import {
  useState,
  useContext,
  createContext,
  MouseEvent,
  FC,
  Dispatch,
  SetStateAction,
} from 'react';

import useScrollSpy from '../useScrollSpy/useScrollSpy';

interface IContextProps {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

const SectionContext = createContext<Partial<IContextProps>>({});

const SectionProvider: FC = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string>('');

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

const useSections = () => {
  const { observe } = useScrollSpy({ rootMargin: '-50% 0px -50% 0px' });

  const { currentSection, setCurrentSection } = useContext(SectionContext);

  const observeSection = (id: string) =>
    observe(id, false, () => {
      setCurrentSection?.(id);
    });

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>) => {
    // When we're not on '/', behave like a regular link but set current section beforehand
    if (window.location.pathname !== '/') {
      setCurrentSection?.(e.currentTarget.hash);
      return;
    }

    // Don't preventDefault() to not break browser history

    document
      .querySelector(e.currentTarget.hash)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return { observeSection, scrollToSection, currentSection };
};

export { useSections, SectionProvider };
