-- CreateTable
CREATE TABLE "JU01_Students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "address" TEXT NOT NULL,
    "hasDisabilities" BOOLEAN NOT NULL,
    "classId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JU02_Classes" (
    "id" SERIAL NOT NULL,
    "class" TEXT NOT NULL,
    "section" INTEGER NOT NULL,
    "max" INTEGER NOT NULL DEFAULT 20,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JU01_Students.name_unique" ON "JU01_Students"("name");

-- CreateIndex
CREATE UNIQUE INDEX "JU02_Classes.class_unique" ON "JU02_Classes"("class");

-- AddForeignKey
ALTER TABLE "JU01_Students" ADD FOREIGN KEY ("classId") REFERENCES "JU02_Classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
