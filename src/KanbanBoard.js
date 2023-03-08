import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Kanban.css';
import KanbanList from './KanbanList';

export default function KanbanBoard() {
  return (
    <div className="KanbanBoard">

        <KanbanList title="TODO" />

        <KanbanList title="DONE" />

    </div>
  );
}

