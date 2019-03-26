import React, { Component } from 'react';
import { Document, Page } from 'react-pdf'
import resume from '../../assets/pdf/Evan_s_Resume.pdf'


class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    // file="../../assets/pdf/Evan_s_resume.pdf"
                    file={resume}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}

export default Resume;
