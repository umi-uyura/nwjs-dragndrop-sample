'use strict';

(function() {
  var Holder = React.createClass({
    getInitialState: function() {
      return {
        hover: false
      };
    },
    doDragOver: function(e) {
      this.setState({ hover: true });
    },
    doDragLeave: function() {
      this.setState({ hover: false });
    },
    doDrop: function(e) {
      e.preventDefault();

      for (var i = 0; i < e.dataTransfer.files.length; ++i) {
        console.log(e.dataTransfer.files[i].path);
      }
    },
    render: function() {
      var styles = {
        leave: {
          border: '10px dashed #ccc',
          width: '300px',
          height: '300px',
          margin: '20px auto'
        },
        hover: {
          border: '10px dashed #333',
          width: '300px',
          height: '300px',
          margin: '20px auto'
        }
      };
      var style = this.state.hover ? styles.hover : styles.leave;
      return (
          <div style={style} onDragOver={this.doDragOver} onDragLeave={this.doDragLeave} onDrop={this.doDrop}></div>
      )
    }
  });

  React.render(
    <Holder />,
    document.getElementById('app')
  );
})();
