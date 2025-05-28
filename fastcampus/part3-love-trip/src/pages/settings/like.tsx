import ListRow from '@shared/ListRow'
import FixedBottomButton from '@shared/FixedBottomButton'
import useEditLike from '@/components/settings/like/hooks/useEditLike'

import {
  DragDropContext,
  Droppable,
  Draggable,
  type DraggableProps,
  type DropResult,
  type DroppableProps,
} from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'

function LikePage() {
  const { data } = useEditLike()

  return (
    <div>
      <DragDropContext onDragEnd={() => {}}>
        <StrictModeDroppable droppableId="likes">
          {(droppableProps) => (
            <ul
              ref={droppableProps.innerRef}
              {...droppableProps.droppableProps}
            >
              {data?.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProps) => (
                      <li
                        ref={draggableProps.innerRef}
                        {...draggableProps.draggableProps}
                        {...draggableProps.dragHandleProps}
                      >
                        <ListRow
                          as="div"
                          contents={
                            <ListRow.Texts title="test" subTitle="test" />
                          }
                        />
                      </li>
                    )}
                  </Draggable>
                )
              })}
            </ul>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  )
}

function StrictModeDroppable({ children, ...props }: DroppableProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return <Droppable {...props}>{children}</Droppable>
}

export default LikePage
