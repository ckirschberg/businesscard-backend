import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TestModule } from './../src/test.module';
import { BusinessCardDto } from './../src/business-card/business-card.dto';
import { BusinessCardService } from 'src/business-card/business-card.service';

describe('Business Card Controller (e2e)', () => {
  let app: INestApplication;
  let bcService: BusinessCardService;

  beforeEach(async () => {
    await bcService.deleteMany({}); // delete all businesscards.
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    bcService = moduleFixture.get(BusinessCardService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Post BusinessCard controller', () => {
    it('should create a new valid business card', async () => {
        // Arrange
        const bc = new BusinessCardDto("Mathias", "Adjunkt", "mtnl@cphbusiness.dk", "Hello", "Caring for little animals");
        // Act
        const result = await request(app.getHttpServer())
                        .post("/businesscards")
                        .send(bc)
                        .expect(201)
        // Assert
        const res = result.body;
        expect(res._id).toBeDefined();
        expect(res.__v).toEqual(0);
      });

      
  })

  describe("Get Businesscard controller", () => {
    it("should get all businesscards", () => {
        // Arrange
        const bc1 = new BusinessCardDto("1", "f", "fkdasælf@fjæak.dk", "fkjaæsfd", "akfjæd");
        const bc2 = new BusinessCardDto("1", "f", "fkdasælf@fjæak.dk", "fkjaæsfd", "akfjæd");
        bcService.createBusinessCard(bc1)
        bcService.createBusinessCard(bc2);

        //Act
        // call the endpoint to get all business cards

        //Assert (expect)
        // tests that I get what I should get

    });
  })
  


// Closing app after all tests => not hanging.
    afterAll(() => {
        app.close();
    });
});
