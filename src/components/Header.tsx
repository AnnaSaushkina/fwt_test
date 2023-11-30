import React from 'react';
import styles from './Header.styles';

const Header: React.FC<{ toggleTheme: () => void; theme: string }> = ({
  toggleTheme,
  theme,
}) => (
    <StyledHeader>
      <Wrapper>
        <StyledHeading to="/" style={{ textDecoration: 'none' }}>
          Where in the world?
        </StyledHeading>
        <ToggleButton onClick={toggleTheme} aria-live="polite">
          {theme === Theme.Light ? <IoMoonOutline /> : <FiSun />}
          <span>{theme === Theme.Light ? 'Dark Mode' : 'Light Mode'}</span>
        </ToggleButton>
      </Wrapper>
    </StyledHeader>
  );

export default Header;
