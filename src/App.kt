package com.hawk

import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.asList
import org.w3c.dom.toElementList
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.attribute

/**
 * App class
 *
 * @author <a href="@sur3shg">Suresh G</a>
 * @version 1.0
 */

/**
 * Native JS variables
 */
native("document")
val ndoc: dynamic = noImpl

/**
 * Main javascript function
 *
 * @param function args
 */
fun main(args: Array<String>) {
    args.forEach { console.log("Arg: ${it}") }
    val list = listOf(1, 2, 3, 6, 7, 9, 22)
    console.log(list.filter { n -> n % 2 == 0 }.map { it * 2 }.toString())
    console.log("Email : ${document.getElementById("email")}")

    document.getElementsByTagName("input").asList().forEach { console.log(" ID: ${it.getAttribute("id")}") }
    document.getElementById("email")?.setAttribute("value", "hello@kotlinlang.org")
    document.getElementById("name")?.setAttribute("value", "Kotlin JS Demo")

    jsInterOp()
}

/**
 * For js interoperability
 */
fun jsInterOp() {
    js("console.log('JS inling from kotlin')")
    val ies = ndoc.getElementsByTagName("input")
    console.log("Found ${ies.length} input elements.")
    for (i in 0..(ies.length as Int) - 1) {
        console.log("InputElement-${i} : ${ies[i].id}")
    }
}

/**
 * Calling kotlin from javascript.
 *
 * Celsius to Fahrenheit conversion.
 */
fun c2f(self: dynamic) {
    console.log("Self object: ${self} ")
    var text: HTMLInputElement = document.getElementById("celcius") as HTMLInputElement
    val celsius: Double? = safeParseDouble(text.value)
    if (celsius == null) {
        window.alert("Please give valid input!!!")
        return
    }
    val fahrenheit = celsius * 1.8 + 32
    console.log("Fahrenheit value: ${fahrenheit} ")
    window.alert("Celcius (${celsius}) -> Fahrenheit (${fahrenheit}) ")
}


