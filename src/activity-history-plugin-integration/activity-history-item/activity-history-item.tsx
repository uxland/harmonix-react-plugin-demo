
interface ActivityHistoryItemProps {
  item: any;
}

export const ActivityHistoryItem: React.FC<ActivityHistoryItemProps> = ({item})=> {
  return (
    <div>{item.date} | {item.id} | {item.professional.name}  | {item.professional.speciality.description} | {item.center.description}</div>
  )
}

