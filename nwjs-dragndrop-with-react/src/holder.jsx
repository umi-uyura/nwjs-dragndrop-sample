'use strict';

var Holder = React.createClass({
  styles: {
    leave: {
      border: '10px dashed #ccc',
      width: '300px',
      height: '300px',
      margin: '20px auto'
    },
    hover: {
      border: '10px dashed #333',
      width: '300px',           // <-- 重複するが追加
      height: '300px',          // <-- 〃
      margin: '20px auto'       // <-- 〃
    }
  },
  getInitialState: function() {
    return {
      hover: false
    };
  },
  doDragOver: function(e) {
    e.preventDefault();         // <-- 必要だった
    this.setState({
      hover: true
    });
  },
  doDragLeave: function() {
    this.setState({
      hover: false
    });
  },
  doDrop: function(e) {
    e.preventDefault();

    for (var i = 0; i < e.dataTransfer.files.length; ++i) {
      console.log(e.dataTransfer.files[i].path);
    }

    // return false;            // <-- 非推奨になっている
  },
  render: function() {
    var style = this.state.hover ? this.styles.hover : this.styles.leave;
    return (
        <div style={style} onDragOver={this.doDragOver} onDragLeave={this.doDragLeave} onDrop={this.doDrop}></div>
    )
  }
});
