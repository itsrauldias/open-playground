import React from 'react';
import * as QRCode from 'easyqrcodejs';

class QrCodeGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.qrcode = React.createRef();
  }

  componentDidMount() {
    // Options
    var options = {
      text: `${this.props.text}`,
      width: this.props.width || 256,
      height: this.props.height || 256,
      colorDark: this.props.colorDark || '#000000',
      logo: this.props.logo || false,
      drawer: 'svg',
      logoBackgroundTransparent: this.props.logoBackgroundTransparent || false
    }

    // Create new QRCode Object
    new QRCode(this.qrcode.current, options);
  }
  render() {
    return (
      <div ref={this.qrcode} />
    );
  }
}

export default QrCodeGenerator;