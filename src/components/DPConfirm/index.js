import { Modal, Row } from 'antd'
const confirm = Modal.confirm

let DPConfirm = (onOkClick, onCancel) => {
  confirm({
    title: '是否确认此操作',
    centered: true,
    iconType: 'info-circle',
    // icon: ()=> <Icon type="question-circle" />,
    onOk() {
      onOkClick()
    },
    onCancel() {
      onCancel()
    },
  })
}
export default DPConfirm
