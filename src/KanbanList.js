import "./Kanban.css";

export default function KanbanList(props) {
    return (
      <div className="KanbanList">
        
            <h2>{props.title}</h2>

            <ListItem value="Do this"/>
            
            <ListItem value="Do that" />
 
      </div>
    );
  }
  
  
function ListItem(props) {
    return (
        <div className="ListItem">
              <span>{props.value}</span>
        </div>
      );
}