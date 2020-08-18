import React from 'react'
import { Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer'

function ExportPDF(props) {
    function create_pdf() {
        return (
            <Document title="Weekly Meal Plan">
                <Page>
                    <View>
                            <Text>Monday</Text>
                            <Text>{props.data.mondayMealLabel}</Text>
                            <Text>{props.data.mondayMealIngredients}</Text>
                            <Text>{props.data.mondayMealSource}</Text>
                            <Text> </Text>

                            <Text>Tuesday</Text>
                            <Text>{props.data.tuesdayMealLabel}</Text>
                            <Text>{props.data.tuesdayMealIngredients}</Text>
                            <Text>{props.data.tuesdayMealSource}</Text>
                            <Text> </Text>

                            <Text>Wednesday</Text>
                            <Text>{props.data.wednesdayMealLabel}</Text>
                            <Text>{props.data.wednesdayMealIngredients}</Text>
                            <Text>{props.data.wednesdayMealSource}</Text>
                            <Text> </Text>

                            <Text>Thursday</Text>
                            <Text>{props.data.thursdayMealLabel}</Text>
                            <Text>{props.data.thursdayMealIngredients}</Text>
                            <Text>{props.data.thursdayMealSource}</Text>
                            <Text> </Text>

                            <Text>Friday</Text>
                            <Text>{props.data.fridayMealLabel}</Text>
                            <Text>{props.data.fridayMealIngredients}</Text>
                            <Text>{props.data.fridayMealSource}</Text>
                            <Text> </Text>

                            <Text>Saturday</Text>
                            <Text>{props.data.saturdayMealLabel}</Text>
                            <Text>{props.data.saturdayMealIngredients}</Text>
                            <Text>{props.data.saturdayMealSource}</Text>
                            <Text> </Text>

                            <Text>Sunday</Text>
                            <Text>{props.data.sundayMealLabel}</Text>
                            <Text>{props.data.sundayMealIngredients}</Text>
                            <Text>{props.data.sundayMealSource}</Text>
                            <Text> </Text>
                    </View>
                </Page>
            </Document>
        )
    }
    return(
        <div>
            <PDFDownloadLink className="pdf_export" document={create_pdf()} fileName="weeklyMeals.pdf">
                Download PDF
            </PDFDownloadLink>
        </div>
    )
}

export default ExportPDF
