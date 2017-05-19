import React from 'react';
import WeUI from 'react-weui';
const {Cell,CellsTitle,Cells,CellBody,CellFooter,Button} = WeUI;

const App = ({order_sn,user_name,total_fee,callpay}) => (
    <div>
        <Cells>
            <Cell access>
                <CellBody>
                    订单号
                </CellBody>
                <CellFooter>
                    {order_sn}
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    账号
                </CellBody>
                <CellFooter>
                    {user_name}
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    付款方式
                </CellBody>
                <CellFooter>
                    微信支付
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    需付款
                </CellBody>
                <CellFooter>
                    {total_fee}元
                </CellFooter>
            </Cell>
        </Cells>
        <div style={{padding:'15px;'}}>
            <Button onClick={callpay} style={{backgroundColor:'#0ae'}}>确认付款</Button>
        </div>
    </div>
)

export default App
