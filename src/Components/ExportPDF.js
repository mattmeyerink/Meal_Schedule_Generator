import React from 'react'
import { Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer'

function ExportPDF(props) {
    function create_pdf() {
        return (
            <Document title="Weekly Meal Plan">
                <Page>
                    <View>
                        <Text>Section #1</Text>
                    </View>
                </Page>
            </Document>
        )
    }
    return(
        <div className="pdf_export">
            <PDFDownloadLink document={create_pdf()} fileName="weeklyMeals.pdf">
                Download PDF
            </PDFDownloadLink>
        </div>
    )
}

export default ExportPDF
