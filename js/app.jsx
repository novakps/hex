var Cell = React.createClass({
    render: function() {
        var row = this.props.row;
        var cell = this.props.cell;
        return <a title={cell + ', ' + row} className="cell">⬢</a>;
    }
});

var Row = React.createClass({
    render: function() {
        var row = this.props.row;
        var cells = this.props.cells;
        return (
            <div className='row'>
                {cells.map(function(cell) {
                  return <Cell row={row} cell={cell} />;
                  })}
            </div>
        );
    }
});

var Board = React.createClass({
    render: function() {
        var rows = this.props.rows;
        return (
            <div className='board'>
              {rows.map(function(row) {
                  return <Row row={row} cells={[0,1,2,3,4,5,6,7,8,9]} />
               })}
            </div>
        );

    }
});


React.render(
  <Board rows={[0,1,2,3,4,5,6,7,8,9]} />,
  document.getElementById('container')
);
