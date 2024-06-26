/**
 * React Dnd
 */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
// intl messages
import IntlMessages from 'Util/IntlMessages';
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
// fake data generator
const getItems = count =>
	Array.from({ length: count }, (v, k) => k).map(k => ({
		id: `This is draggable item ${k}`,
		content: `This is draggable item ${k}`,
	}));
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};
// const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
	...draggableStyle,
});
const getListStyle = isDraggingOver => ({

});

export default function ReactDND(props) {
   const [items,setItems] = useState(getItems(10));

	const onDragEnd = (result) => {
		// dropped outside the list
		if (!result.destination) {
			return;
      }
      
		const newItems = reorder(
         items,
			result.source.index,
			result.destination.index
      );
      setItems(newItems);
	}

	// Normally you would want to split things out into separate components.
	// But in this example everything is just done in one place for simplicity
   return (
      <div className="dragula-wrapper">
         <PageTitleBar title={<IntlMessages id="sidebar.reactDnd" />} match={props.match} />
         <RctCollapsibleCard heading="React DND">
            <DragDropContext onDragEnd={onDragEnd}>
               <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                     <ul className="list-unstyled list-group drag-list-wrapper" ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                        {items && items.map((item, index) => (
                           <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => (
                                 <li className="list-group-item">
                                    <div
                                       ref={provided.innerRef}
                                       {...provided.draggableProps}
                                       {...provided.dragHandleProps}
                                       className="drag-list"
                                       style={getItemStyle(
                                          snapshot.isDragging,
                                          provided.draggableProps.style
                                       )}>
                                       {item.content}
                                    </div>
                                    {provided.placeholder}
                                 </li>
                              )}
                           </Draggable>
                        ))}
                        {provided.placeholder}
                     </ul>
                  )}
               </Droppable>
            </DragDropContext>
         </RctCollapsibleCard>
      </div>
   )
}
