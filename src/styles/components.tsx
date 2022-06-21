export const components = {
  Button: {
    baseStyle: {
      width: '100%',
      backgroundColor: 'lightgray',
      border: 'none',
      color: 'black',
    },
    variants: {
      login_button: {
        width: '100%',
        backgroundColor: '#20cdbb',
        border: 'none',
        borderRadius: '22.5px',
        color: 'white',
      },
    },
  },
  Input: {
    baseStyle: {
      color: 'red',
      border: 'none',
      _focus: {
        outline: 'none',
        borderWidth: '0px',
        border: 'none',
      },
    },
  },
};
