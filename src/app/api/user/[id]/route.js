import { NextResponse } from "next/server";
import prisma from "../../../../server/prisma";

export async function DELETE(req, { params }) {
    try {
        const id = parseInt(params.id);
        const deleteuser = await prisma.user.delete({
            where: { id }
        });
        return NextResponse.json(deleteuser);
    }catch (error){
        console.error(error);
        return NextResponse.error(500);
    }
}