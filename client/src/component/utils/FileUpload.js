import React from 'react'
import Dropzone from 'react-dropzone'
import {
    PlusOutlined
} from '@ant-design/icons';
import axios from 'axios';

function FileUpload() {

    const dropHandler = async (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])

        const response = await axios.post('/api/product/image', formData, config)
        if (response.data.success) {
            console.log(response.data)
        } else {
            alert('파일을 저장하는데 실패했습니다.')
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div style={{
                            width: 300, height: 240, border: '1px solid lightgray',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            <PlusOutlined style={{ fontSize: '3rem' }} />
                        </div>
                    </section>
                )}

            </Dropzone>
        </div>
    )
}

export default FileUpload
